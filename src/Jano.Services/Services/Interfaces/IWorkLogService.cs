using System.Collections.Generic;
using Jano.Domain.Models;
using Jano.Infrastructures.Models;

namespace Jano.Infrastructures.Services.Interfaces
{
  public interface IWorkLogService
  {
    void SendRequest(IEnumerable<WorkLogDto> workLogsDto);
  }
}