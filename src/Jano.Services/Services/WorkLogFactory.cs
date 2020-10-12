using System;
using Jano.Domain.Models;
using Jano.Services.Services.Interfaces;

namespace Jano.Services
{
  public class WorkLogFactory : IWorkLogFactory
  {
    public WorkLog Create(string ticket, string username, int duration, string attrValue, string comment = null )
    {
      return WorkLog.Create(ticket, username, duration, comment, WorkLogAttribute.Create(attrValue));
    }
  }
}
