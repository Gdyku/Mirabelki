import React from 'react'
import { Grid, Icon, Segment, SegmentGroup } from 'semantic-ui-react'
import { IProduct } from './product'

export const ProductDetailedInfo: React.FC<{product: IProduct}> = ({product}) => {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{product.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{product.dateAdded}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
}
