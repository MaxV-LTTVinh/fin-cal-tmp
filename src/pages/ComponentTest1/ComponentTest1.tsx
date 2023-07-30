import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';

export interface IComponentTest1Props {
  test: number;
}

export function ComponentTest1(props: IComponentTest1Props) {
  return (
    <div>
      ComponentTest1 {props.test}
      <TrendingCreators />
    </div>
  );
}
