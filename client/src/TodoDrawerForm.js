import {Drawer, Input, Col, Select, Form, Row, Button} from 'antd';
import {addNewTodo} from "./client";
import {useState} from 'react';

const {Option} = Select;

function TodoDrawerForm({showDrawer, setShowDrawer, fetchTodos}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting, setSubmitting] = useState(false);

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
                    <Form.Item
                        name="text"
                        label="Text"
                        rules={[{required: true, message: 'Please enter text'}]}
                    >
                        <Input placeholder="Please enter text"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="state"
                        label="State"
                        rules={[{required: true, message: 'Please select a state'}]}
                    >
                        {/*todo: get states from enum*/}
                        <Select placeholder="Please select a state">
                            <Option value="IN_PROGRESS">IN_PROGRESS</Option>
                            <Option value="DONE">DONE</Option>
                            <Option value="OTHER">OTHER</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
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