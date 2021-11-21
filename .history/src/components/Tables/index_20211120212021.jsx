import PropTypes from 'prop-types'
import React from 'react'

export default function Tables({
  headings,
  // items,
  // resourceName,
  // lastElement,
  // increaseLimit
}) {
  const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]


  const styles = {
    container: "shadow overflow-hidden border-b border-gray-200 rounded-lg",
    table: "min-w-full divide-y divide-gray-200 rounded-lg",
    header: "bg-gray-50",
    scope: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    buttonScope: "relative px-6 py-3",
    body: "bg-white divide-y divide-gray-200",
    dataCell: "px-6 py-4 whitespace-nowrap",
    row:"flex items-center",
  }
  return (
          <div className={styles.container}>
            <table className={styles.table}>
              <thead className={styles.header}>
                <tr>
                  <th scope="col"className={styles.scope}>Name</th>
                  <th scope="col"className={styles.scope}>
                    Title
                  </th>
                  <th scope="col"className={styles.scope}>
                    Status
                  </th>
                  <th scope="col"className={styles.scope}>
                    Role
                  </th>
                  <th scope="col" className={styles.buttonScope}>
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className={styles.body}>
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className={styles.dataCell}>
                      <div className={styles.row}>
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.dataCell}>
                      <div className={styles.text}>{person.title}</div>
                    </td>
                    <td className={styles.dataCell}>
                      <span className={styles.text}>
                        Active
                      </span>
                    </td>
                    <td className={styles.dataCell}>{person.role}</td>
                    <td className={styles.dataCell}>
                      <a href="#">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}

Tables.propTypes = {
  headings: PropTypes.array,
  items: PropTypes.array,
  resourceName: PropTypes.string,
  lastElement: PropTypes.bool,
  increaseLimit: PropTypes.func,
}
