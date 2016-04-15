using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.Domain.Models;
using KMMSEP.Infrastructure.IRepository;
using KMMSEP.Infrastructure.Repository;

namespace KMMSEP.Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MongoDbContext _context = new MongoDbContext();
        private IScheduleRepository _scheduleRepository; 

        public IScheduleRepository ScheduleRepository
        {
            get { return _scheduleRepository ?? (_scheduleRepository = new ScheduleRepository()); }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
