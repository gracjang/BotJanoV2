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
}