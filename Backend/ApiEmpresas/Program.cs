using ApiEmpresas.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // Permite todas as origens
              .AllowAnyMethod()  // Permite todos os métodos (GET, POST, etc.)
              .AllowAnyHeader(); // Permite todos os cabeçalhos
    });
});

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
app.UseCors("AllowAll");
app.MapControllers();

app.Run();
