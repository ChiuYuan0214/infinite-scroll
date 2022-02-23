class Repo {
  url: string;
  id: number;
  name: string;
  date: string;
  downloadsUrl: string;

  constructor(
    url: string,
    id: number,
    name: string,
    date: string,
    downloadsUrl: string
  ) {
    this.url = url;
    this.id = id;
    this.name = name;
    this.date = date;
    this.downloadsUrl = downloadsUrl;
  }
}

export default Repo;
