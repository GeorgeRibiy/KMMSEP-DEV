using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using KMMSEP.Domain.Services;
using KMMSEP.Domain.Services.IServices;
using KMMSEP.API.Models;
using System.Threading.Tasks;

namespace KMMSEP.Controllers
{
    [RoutePrefix("api/schedule")]
    public class ScheduleController : ApiController
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [HttpGet]
        public async Task<ScheduleModel> GetBySemesterAndCourseAsync(string course, string semester)
        {
            return await _scheduleService.ReturnBySemesterAndCourseAsync(course, semester);
        }

        //[HttpGet]
        //public async Task<ScheduleModel> GetBySemesterAndCourseAsync()
        //{
        //    return await _scheduleService.ReturnBySemesterAndCourseAsync("1", "1");
        //}
    }
}