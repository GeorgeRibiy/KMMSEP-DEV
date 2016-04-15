using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;


using Unity.WebApi;namespace KMMSEP
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(UnityConfig.GetConfiguredContainer());
        }
    }
}
