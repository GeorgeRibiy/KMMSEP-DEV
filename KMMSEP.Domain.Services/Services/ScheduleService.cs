using System.Threading.Tasks;
using KMMSEP.API.Models;
using KMMSEP.API.Models.IMappers;
using KMMSEP.Domain.Services.IServices;
using KMMSEP.Infrastructure.UnitOfWork;

namespace KMMSEP.Domain.Services
{
    public class ScheduleService: IScheduleService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IScheduleMapper _mapper;

        public ScheduleService(IUnitOfWork unitOfWork, IScheduleMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ScheduleModel> ReturnBySemesterAndCourseAsync(string course, string semester)
        {
            var temp =   await _unitOfWork.ScheduleRepository.GetBySemesterAndCourseAsync(course, semester);
            return _mapper.ToApiModel(temp);
        }
    }
}
