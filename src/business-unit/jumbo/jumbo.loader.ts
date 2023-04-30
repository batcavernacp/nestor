import DataLoader from 'dataloader';
import { getRepository } from 'typeorm';
import { JumboEntity } from './jumbo.entity';

export const JumboLoader = () =>
  new DataLoader(async (ids: string[]) => {
    const jumbos = await getRepository(JumboEntity).findByIds(ids);
    const jumbosById = jumbos.reduce((prev, user) => ({ ...prev, [user.id]: user }), {});
    return ids.map((id) => jumbosById[id] || null);
  });
