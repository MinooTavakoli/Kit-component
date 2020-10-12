import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ChatListPage from '../ChatListPage'
import Item from '../Item'
import ChatListStore from '../ChatListStore'

export default function ChatRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ChatListPage />
                </Route>
                <Route exact path="/chat/:id">
                    <Item />
                </Route>
            </Switch>
        </Router>
    )
}
