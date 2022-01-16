import { Button, Col, Input, Row } from "antd";
import { ReactElement, useState } from "react";
import style from "./Filter.module.scss";

interface IProps {}

export default function Filter({}: IProps): ReactElement {
  const [movieTitle, setMovieTitle] = useState("");

  return (
    <div className={style.filter}>
      <Row justify='center' gutter={[10, 0]}>
        <Col xs={15} md={12} lg={8}>
          <Input
            placeholder="Title"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </Col>
        <Col >
          <Button type="primary">Search</Button>
        </Col>
      </Row>
    </div>
  );
}
// xs={20} md={12} lg={8}
