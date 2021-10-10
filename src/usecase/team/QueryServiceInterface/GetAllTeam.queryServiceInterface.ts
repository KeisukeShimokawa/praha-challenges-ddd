export class GetAllTeamDTO {
  public readonly id: string;
  public readonly name: string;
  public readonly pairs: { id: string }[];

  public constructor(props: {
    id: string;
    name: string;
    pairs: { id: string }[];
  }) {
    const { id, name, pairs } = props;
    this.id = id;
    this.name = name;
    this.pairs = pairs;
  }
}

export interface IGetAllTeamQueryService {
  getAll: () => Promise<GetAllTeamDTO[]>;
}
