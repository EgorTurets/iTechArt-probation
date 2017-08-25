[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(RealEstateAgency.UI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(RealEstateAgency.UI.App_Start.NinjectWebCommon), "Stop")]

namespace RealEstateAgency.UI.App_Start
{
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;
    using Ninject;
    using Ninject.Web.Common;
    using RealEstateAgency.BusinessLayer;
    using RealEstateAgency.DBLayer;
    using RealEstateAgency.Models.Models;
    using RealEstateAgency.UI.Utils;
    using System;
    using System.Reflection;
    using System.Web;

    public static class NinjectWebCommon 
    {
        //=== My code ===
        //private static IKernel kernel;

        public static IKernel Kernel
        { get { return bootstrapper.Kernel; } }

        //=== End my code ===

        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        public static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Load(Assembly.GetExecutingAssembly());

                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<IStockRepository>().To<ListingRepository>().InRequestScope();
            kernel.Bind<IStockService>().To<ListingService>().InRequestScope();
            kernel.Bind<ICustomUserStore>().To<ReaUserStore>().InRequestScope();
            //kernel.Bind<CustomUserManager>().ToSelf().WithConstructorArgument("store", new CustomUserStore());
            //kernel.Bind<CustomSignInManager>().ToSelf();

            kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

            //DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));
        }
    }
}
