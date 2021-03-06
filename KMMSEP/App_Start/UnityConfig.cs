﻿using System;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;
using KMMSEP.Domain.Services;
using KMMSEP.Domain.Services.IServices;
using KMMSEP.Infrastructure.UnitOfWork;
using KMMSEP.Infrastructure.IRepository;
using KMMSEP.Infrastructure.Repository;
using KMMSEP.API.Models.IMappers;
using KMMSEP.API.Models.Mappers;

namespace KMMSEP
{
    public static class UnityConfig
    {

        #region Unity Container
        private static Lazy<IUnityContainer> container = new Lazy<IUnityContainer>(() =>
        {
            var container = new UnityContainer();
            RegisterTypes(container);
            return container;
        });

        /// <summary>
        /// Gets the configured Unity container.
        /// </summary>
        public static IUnityContainer GetConfiguredContainer()
        {
            return container.Value;
        }
        #endregion

        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<IUnitOfWork, UnitOfWork>();
            container.RegisterType<IScheduleRepository, ScheduleRepository>();
            container.RegisterType<IScheduleService, ScheduleService>();
            container.RegisterType<IScheduleMapper, ScheduleMapper>();
            
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}