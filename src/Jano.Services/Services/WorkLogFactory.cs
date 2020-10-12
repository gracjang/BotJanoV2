using System.Collections.Generic;
using System.Linq;
using Jano.Domain.Models;
using Jano.Infrastructures.Models;
using Jano.Infrastructures.Services.Interfaces;

namespace Jano.Infrastructures.Services
{
  public class WorkLogFactory : IWorkLogFactory
  {
    public IEnumerable<WorkLog> Create(IEnumerable<WorkLogDto> workLogsDto)
    {
      return workLogsDto.
        Select(workLogDto => WorkLog.Create(workLogDto.Ticket, workLogDto.Username, workLogDto.Duration, workLogDto.Comment, 
            WorkLogAttribute.Create(workLogDto.AttrValue)));
    }
  }
}
