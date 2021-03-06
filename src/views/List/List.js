import React from 'react'

import Layout from '../../components/Layout'
import TodoListCard from '../../components/TodoListCard'

const List = () => (
  <div className="list-page">
    <Layout pageTitle="Lists">
      <TodoListCard
        title="Shopping List"
        numberOfTasks={4}
      />
      <button>New list</button>
    </Layout>
  </div>
)

export default List