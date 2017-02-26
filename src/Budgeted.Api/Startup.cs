using DataAccess;
using Handlers;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;

namespace Budgeted.Api
{
    public class Startup
    {
        IConfigurationRoot Configuration;
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {            
            services.AddTransient<IMongoDatabase>(m =>
            {
                var client = new MongoClient(Configuration.GetSection("MongoConnection:ConnectionString").Value);
                return client.GetDatabase(Configuration.GetSection("MongoConnection:Database").Value);
            });

            services.AddSingleton<Identity>(m=>{
                return new Identity(){
                    Id=System.Guid.Parse("2da0a626-cb5d-4cb9-8e79-92da1fb1f59a")
                };
            });
            
            services.AddTransient<ITransactionRepository,TransactionRepository>();
            services.AddTransient<IUserRepository,UserRepository>();

            services.AddMvc();
            services.AddMediatR(typeof(Startup));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            app.UseMvcWithDefaultRoute();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

        }
    }

    public class Identity{
        public System.Guid Id { get; set; }
    }


}
