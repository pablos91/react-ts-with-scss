import * as React from 'react';
import { Container, Grid, Segment, Statistic, Responsive, Divider } from 'semantic-ui-react';
import '../styles/HomePage.scss';

class HomePage extends React.Component {
  render() {

    return (
      <Container>
        <Grid stretched>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={6}>
              <Segment basic textAlign="center">
                <Statistic size='small'>
                  <Statistic.Value>0.01 BTC ≈ 100 PLN</Statistic.Value>
                  <Statistic.Label>balance</Statistic.Label>
                </Statistic>
              </Segment>
              <Responsive as={Divider} hidden maxWidth={Responsive.onlyTablet.maxWidth} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={4}>
              <Segment basic textAlign="center">
                <Statistic size='small'>
                  <Statistic.Value>2 489 111</Statistic.Value>
                  <Statistic.Label>at block height</Statistic.Label>
                </Statistic>
              </Segment>
              <Responsive as={Divider} hidden maxWidth={Responsive.onlyTablet.maxWidth} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={6}>
              <Segment basic textAlign="center">
                <Statistic size='small'>
                  <Statistic.Value>1 BTC ≈ 10 000 PLN</Statistic.Value>
                  <Statistic.Label>current rate</Statistic.Label>
                </Statistic>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
