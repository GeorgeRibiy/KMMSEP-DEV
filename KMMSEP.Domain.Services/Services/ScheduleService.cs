using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.API.Models;
using KMMSEP.Domain.Models;
using KMMSEP.Domain.Services.IServices;
using KMMSEP.Infrastructure.UnitOfWork;
using KMMSEP.API.Models.IMappers;

namespace KMMSEP.Domain.Services
{
    public class ScheduleService: IScheduleService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IScheduleMapper _mapper;

        public ScheduleService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ScheduleModel> ReturnBySemesterAndCourseAsync(string course, string semester)
        {
            var temp =  await _unitOfWork.ScheduleRepository.GetBySemesterAndCourseAsync(course, semester);
            return _mapper.ToApiModel(temp);
        }
    }
}
