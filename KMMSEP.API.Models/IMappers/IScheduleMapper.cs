using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.API.Models;
using KMMSEP.Domain.Models;

namespace KMMSEP.API.Models.IMappers
{
    public interface IScheduleMapper
    {
        Schedule ToDomainModel(ScheduleModel model);
        ScheduleModel ToApiModel(Schedule domain);
    }
}
