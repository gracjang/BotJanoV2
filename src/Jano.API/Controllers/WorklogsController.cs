using System.Collections.Generic;
using Jano.Infrastructures.Models;
using Jano.Infrastructures.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Jano.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorklogsController : Controller
    {
        private readonly IWorkLogService _workLogService;

        public WorklogsController(IWorkLogService workLogService)
        {
            _workLogService = workLogService;
        }

        [HttpPost]
        public IActionResult AddWorkLog([FromBody] IEnumerable<WorkLogDtoV2> workLogsDto)
        {
            //_workLogService.SendRequest(workLogsDto);
            return Ok();
        }
        
        [HttpGet]
        public IActionResult Get() => Ok("Worklogs API");
    }
}