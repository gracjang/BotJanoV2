namespace Jano.Infrastructures.Models
{
  public class WorkLogDto
  {
    public string Ticket { get; set; }

    public string Username { get; set; }

    public int Duration { get; set; }

    public string AttrValue { get; set; }

    public string Comment { get; set; }
  }

  public class WorkLogDtoV2
  {
    public string Ticket { get; set; }

    public string Duration { get; set; }

    public int AttrValue { get; set; }

    public string Comment { get; set; }
  }
}