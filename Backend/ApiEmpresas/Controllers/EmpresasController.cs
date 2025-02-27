using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiEmpresas.Data;
using ApiEmpresas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiEmpresas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpresasController : ControllerBase
    {
        private readonly EmpresasContext _context;

        public EmpresasController (EmpresasContext context)
        {
            _context = context;
        }

        //Listar todas as empresas criadas
        [HttpGet]
        public async Task<ActionResult<List<EmpresaModel>>> ListarEmpresas()
        {
            var empresas = await _context.Empresa.ToListAsync();
            return Ok(empresas);
        }

        //Listar uma empresa especifica, ao buscar por seu ID
        [HttpGet ("{Id}")]
        public async Task<ActionResult<EmpresaModel>> VerificarEmpresaEspecifica(int Id)
        {
            var empresaEspecifica = await _context.Empresa.FindAsync(Id);
            
            if (empresaEspecifica == null)
            {
                return NotFound("Id da empresa informada é inexistente");
            }

            return Ok(empresaEspecifica);
        }

        //Criar uma empresa
        [HttpPost]
        public async Task<ActionResult<EmpresaModel>> CriarEmpresa([FromBody] EmpresaModel empresa)
        {
            //metodos para verificar se o cnpj e a razão social já são existentes
            if(_context.Empresa.Any(e => e.Cnpj == empresa.Cnpj))
            {
                return BadRequest("Já existe uma empresa com esse CNPJ");
            }

            if(_context.Empresa.Any(e => e.RazaoSocial == empresa.RazaoSocial))
            {
                return BadRequest("Já existe em sistema uma empresa com essa mesma razão social");
            }

            empresa.CriadoEm = DateTime.Now;
            empresa.AtualizadoEm = DateTime.Now;

            _context.Empresa.Add(empresa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(VerificarEmpresaEspecifica),new {id = empresa.Id}, empresa);
        }

        //Editar uma empresa existente
        [HttpPut ("{Id}")]
        public async Task<ActionResult> EditarEmpresa(int Id,[FromBody] EmpresaModel empresa)
        {
            if (Id != empresa.Id)
            {
                return BadRequest("empresa não existe em nosso sistema");
            }
            if(_context.Empresa.Any(e => e.Cnpj == empresa.Cnpj))
            {
                return BadRequest("Já existe uma empresa com esse CNPJ");
            }

            if(_context.Empresa.Any(e => e.RazaoSocial == empresa.RazaoSocial))
            {
                return BadRequest("Já existe em sistema uma empresa com essa mesma razão social");
            }

            //Atualiza a data de atualização ou edição da empresa
            empresa.AtualizadoEm = DateTime.Now;
            //salva a alteração feita no banco de dados de forma direta (com o MIGRATIONS)
            _context.Entry(empresa).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok("Empresa editada com sucesso!");
        }

        //Deletar uma empresa existente
        [HttpDelete ("{Id}")]
        public async Task<ActionResult> DeletarEmpresa(int Id)
        {
            var empresaDeletada = await _context.Empresa.FindAsync(Id);
            if(empresaDeletada == null)
            {
                return BadRequest("Empresa inexistente em nosso sistema");
            }

            _context.Empresa.Remove(empresaDeletada);
            await _context.SaveChangesAsync();

            return Ok("Empresa deletada com sucesso!");
        }
        
    }
}