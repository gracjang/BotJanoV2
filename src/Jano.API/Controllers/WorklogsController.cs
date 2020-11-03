﻿using System.Collections.Generic;
using Jano.Infrastructures.Models;
using Jano.Infrastructures.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Jano.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class WorklogsController : Controller
    {
        private readonly IWorkLogService _workLogService;

        public WorklogsController(IWorkLogService workLogService)
        {
            _workLogService = workLogService;
        }

        [HttpGet]
        public IActionResult AddWorkLog([FromBody] IEnumerable<WorkLogDto> workLogsDto)
        {
            _workLogService.SendRequest(workLogsDto);
            return Ok();
        }
        
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get() => Ok("Worklogs API");
    }
}