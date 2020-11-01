using System.Collections.Generic;
using System.Net;
using System.Net.Http.Headers;
using Jano.Domain.Models;
using Jano.Infrastructures.Models;
using Jano.Infrastructures.Services.Interfaces;
using RestSharp;
using RestSharp.Authenticators;
using RestSharp.Serializers;
using RestSharp.Serializers.NewtonsoftJson;

namespace Jano.Infrastructures.Services
{
  public class WorkLogService : IWorkLogService
  {
    private readonly IWorkLogFactory _workLogFactory;
    private const string JiraUrl = "xyz";
    public WorkLogService(IWorkLogFactory workLogFactory)
    {
      _workLogFactory = workLogFactory;
    }

    public void SendRequest(IEnumerable<WorkLogDto> workLogsDto)
    {
      var workLogs = _workLogFactory.Create(workLogsDto); 

      var client = new RestClient(JiraUrl);
      client.UseNewtonsoftJson();
      client.Authenticator = new NtlmAuthenticator(CredentialCache.DefaultNetworkCredentials);

      foreach (var workLog in workLogs)
      {
        var request = new RestRequest().AddJsonBody(workLog);
        client.Post(request);
      }
    }
  }
}