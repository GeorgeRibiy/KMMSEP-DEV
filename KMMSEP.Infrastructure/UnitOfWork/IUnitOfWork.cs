using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.Domain.Models;
using KMMSEP.Infrastructure.IRepository;

namespace KMMSEP.Infrastructure.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IScheduleRepository ScheduleRepository { get; }
    }
}
