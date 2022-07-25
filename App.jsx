
import {useState} from 'react'
import { Container } from './styles';

import { Item, TodoList, Input, Button, List } from '/src/styles.js'

function App() {
    const [tasks, setTasks] = useState(['Tomar café'])
    const [inputValue, setInputValue] = useState ('')

    function inputChange(event) {
        setInputValue(event.target.value);
            
    }
    function buttonClick (){
        setTasks ([... tasks, inputValue])

    }
    return (<Container>
        <TodoList>
            <Input placeholder="Digite a sua Tarefa"  onChange={inputChange}/>
            <Button onClick={buttonClick}> Adicionar Tarefa </Button>
            <List>
                {
                tasks.map((item,index) => (<Item key={index}>{item}</Item>
                ))}

            </List>
            
            </TodoList>
    </Container>)
}

export default App