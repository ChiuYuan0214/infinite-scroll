import Repo from "../models/repo";

export const extract = (list: any) => {
  if (list.length === 0) {
    return [];
  }
  return list.map(
    (data: any) =>
      new Repo(
        data["clone_url"],
        data.id,
        data.name,
        data["created_at"],
        data["downloads_url"]
      )
  );
};
