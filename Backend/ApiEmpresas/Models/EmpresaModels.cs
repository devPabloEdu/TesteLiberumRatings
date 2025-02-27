using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiEmpresas.Models
{
    public class EmpresaModel
    {   
        public int Id { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; } 
        public DateTime DataDeRegistro { get; set; }
        //True : status ativo, False : status inativo
        public bool Status { get; set; }
        public DateTime CriadoEm { get; set; }
        public DateTime AtualizadoEm { get; set; }
    }
}