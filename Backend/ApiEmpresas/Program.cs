using ApiEmpresas.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Adicionei o contexto do banco de dados criado no sql server pelo migrations
builder.Services.AddDbContext<EmpresasContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CadastroEmpresasDb")));


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
