import { cpuUsage } from "process";
import React, { Fragment } from "react";
import { Header, Form, Button, Comment, Segment } from "semantic-ui-react";

export const ProductDetailedChat = () => {
  return (
    <Fragment>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>Komentarze do produktu</Header>
      </Segment>
      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar />
            <Comment.Content>
              <Comment.Author as="a">Imie</Comment.Author>
              <Comment.Metadata>
                <div>data dodania komentarza</div>
              </Comment.Metadata>
              <Comment.Text>treść komentarza</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </Fragment>
  );
};
