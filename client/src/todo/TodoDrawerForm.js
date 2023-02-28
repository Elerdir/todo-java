import {Drawer, Input, Col, Select, Form, Row, Button} from 'antd';
import {addNewTodo} from "../client";
import {useState} from 'react';
import TextArea from "antd/es/input/TextArea";

const {Option} = Select;

function TodoDrawerForm({showDrawer, setShowDrawer, fetchTodos}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting, setSubmitting] = useState(false);
    // console.log(localStorage);

    const onFinish = todo => {
        setSubmitting(true)
        console.log(JSON.stringify(todo, null, 2))
        addNewTodo(todo)
            .then(() => {
                console.log("todo added")
                onCLose();
                // successNotification(
                //     "Todo successfully added",
                //     `${todo.name} was added to the system`
                // )
                fetchTodos();
            }).catch(err => {
            console.log(err);
            err.response.json().then(res => {
                console.log(res);
                // errorNotification(
                //     "There was an issue",
                //     `${res.message} [${res.status}] [${res.error}]`,
                //     "bottomLeft"
                // )
            });
        }).finally(() => {
            setSubmitting(false);
        })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Create new todo"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item hidden={true} initialValue={localStorage.getItem("email")}
                        name="createdBy"
                        label="CreatedBy"
                        rules={[{required: true, message: 'Please enter a text'}]}
                    >
                        <input></input>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="text"
                        label="Text"
                        rules={[{required: true, message: 'Please enter a text'}]}
                    >
                        <Input placeholder="Please enter a text"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{required: true, message: 'Please enter a description'}]}
                    >
                        <TextArea placeholder="Please enter a description"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="assign"
                        label="Assignee"
                        rules={[{required: true, message: 'Please select an assignee'}]}
                    >
                        <Select placeholder="Please select an assignee">
                            <Option value="MALE">MALE</Option>
                            <Option value="FEMALE">FEMALE</Option>
                            <Option value="OTHER">OTHER</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            {/* todo předělat na stavy*/}
            {/*<Row gutter={16}>*/}
            {/*    <Col span={12}>*/}
            {/*        <Form.Item*/}
            {/*            name="gender"*/}
            {/*            label="gender"*/}
            {/*            rules={[{required: true, message: 'Please select a gender'}]}*/}
            {/*        >*/}
            {/*            <Select placeholder="Please select a gender">*/}
            {/*                <Option value="MALE">MALE</Option>*/}
            {/*                <Option value="FEMALE">FEMALE</Option>*/}
            {/*                <Option value="OTHER">OTHER</Option>*/}
            {/*            </Select>*/}
            {/*        </Form.Item>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                {submitting}
            </Row>
        </Form>
    </Drawer>
}

export default TodoDrawerForm;