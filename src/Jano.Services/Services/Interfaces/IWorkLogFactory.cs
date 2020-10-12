using Jano.Domain.Models;

namespace Jano.Services.Services.Interfaces
{
  public interface IWorkLogFactory
  {
    WorkLog Create(string ticket, string username, int duration, string attrValue, string comment = null);
  }
}
