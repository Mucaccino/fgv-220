using System;
using System.IO;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.Responses;
using Nancy.TinyIoc;

namespace FGV_Web
{
    public class Bootstraper : DefaultNancyBootstrapper
    {

        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            // Add a new path for static content so our typescript files located in
            //  the 'App' folder can be served to SystemJS
            //
           // this.Conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Front"));
        }

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            conventions.StaticContentsConventions.Clear();
            conventions.StaticContentsConventions.Add((ctx, root) =>
            {
                var reqPath = ctx.Request.Path;

                if (reqPath.Equals("/")) // página inicial
                {
                    reqPath = "fullstack-app\\index.html";
                }

                else if(reqPath.IndexOf(":") >= 0) // caso json, retorna nulo para tratamento no módulo da api
                {
                    return null;
                }
                else if (reqPath.IndexOf(".") >= 0) // se for referente a algum arquivo busca no app
                {
                    reqPath = "fullstack-app\\" + reqPath.Replace("/", "");
                }

                // optionally fall back to an on-disk file, you can just remove this    
                var fileName = Path.GetFullPath(Path.Combine(root, reqPath));
                if (File.Exists(fileName))
                {
                    return new GenericFileResponse(fileName, ctx);
                }
                return null;
            });
        }
    }
}
