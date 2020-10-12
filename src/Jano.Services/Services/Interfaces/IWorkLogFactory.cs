using System.Collections;
using System.Collections.Generic;
using Jano.Domain.Models;
using Jano.Infrastructures.Models;

namespace Jano.Infrastructures.Services.Interfaces
{
  public interface IWorkLogFactory
  {
    IEnumerable<WorkLog> Create(IEnumerable<WorkLogDto> workLogsDto);
  }
}
