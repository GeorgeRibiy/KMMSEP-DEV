using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.API.Models.IMappers;
using KMMSEP.Domain.Models;

namespace KMMSEP.API.Models.Mappers
{
    public class ScheduleMapper : IScheduleMapper
    {
        public Schedule ToDomainModel(ScheduleModel model)
        {
            Schedule domain = new Schedule()
            {
                Content = model.Content
            };
            return domain;
        }

        public ScheduleModel ToApiModel(Schedule domain)
        {
            ScheduleModel model = new ScheduleModel()
            {
                Content = domain.Content
            };
            return model;
        }
    }
}
