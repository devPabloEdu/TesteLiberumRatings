using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiEmpresas.Models;


namespace ApiEmpresas.Data
{
    public class EmpresasContext : DbContext
    {
        public EmpresasContext(DbContextOptions<EmpresasContext> options) : base(options) { }

        public DbSet<EmpresaModel> Empresa {get; set;}

        /* escolhi utilizar O frameWork EF Core me permite utilizar esse metodo abaixo para realizar a modelagem do 
        banco de dados diretamente no código da aplicação, facilitando alterações e a manutenção futura */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {   
            //HasKey define uma chave primaria
            //IsRequired serve para definir que aquela informação deve ser obrigatória 
            //IsUnique define que o campo tem um valor unico, algo como o UNIQUE em SQL
            modelBuilder.Entity<EmpresaModel>()
                .HasKey(m=> m.Id);
            
            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.Cnpj)
                .HasMaxLength(14) //limitei o cnpj a 14 caracteres, algo como o VARCHAR em  SQL
                .IsRequired();
            modelBuilder.Entity<EmpresaModel>()
                .HasIndex(e => e.Cnpj)
                .IsUnique();

            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.RazaoSocial)
                .IsRequired();
            modelBuilder.Entity<EmpresaModel>()
                .HasIndex(e => e.RazaoSocial)
                .IsUnique();
            
            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.DataDeRegistro)
                .IsRequired();
            
            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.Status)
                .IsRequired();

            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.CriadoEm)
                .IsRequired();

            modelBuilder.Entity<EmpresaModel>()
                .Property(e => e.AtualizadoEm)
                .IsRequired();                               
        }
    }
}