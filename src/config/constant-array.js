const StudentListArray = [
  {
    id: '01',
    name:'Jack Ronan',
    assigned: 'Airi Satou',
    date: '01 August 2024',
    status: 'Checkin',
    subject: 'Commerce',
    fees: '120$'
  },
  {
    id: '02',
    name:'Jimmy Morris',
    assigned: 'Angelica Ramos',
    date: '31 July 2024',
    status: 'Pending',
    subject: 'Mechanical',
    fees: '120$'
  },
  {
    id: '03',
    name:'Nashid Martines',
    assigned: 'Ashton Cox',
    date: '15 August 2024',
    status: 'Canceled',
    subject: 'Science',
    fees: '520$'
  },
  {
    id: '04',
    name:'Roman Aurora',
    assigned: 'Cara Stevens',
    date: '29 July 2024',
    status: 'Checkin',
    subject: 'Arts',
    fees: '220$'
  },
  {
    id: '05',
    name:'Samantha',
    assigned: 'Bruno Nash',
    date: '31 July 2024',
    status: 'Checkin',
    subject: 'Maths',
    fees: '130$'
  }
]

const Student2ListArray = [
  {
    id: '01',
    name:'Angelica Ramos',
    assigned: 'Ashton Cox',
    date: '12 August 2024',
    time:'10:15'
  },
  {
    id: '02',
    name:'Bradley Greer',
    assigned: 'Brenden Wagner',
    date: '12 August 2024',
    time:'10:00'
  },
  {
    id: '03',
    name:'Cedric Kelly',
    assigned: 'Brielle Williamson',
    date: '10 May 2024',
    time:'09:45'
  },
  {
    id: '04',
    name:'Caesar Vance',
    assigned: 'Herrod Chandler',
    date: '09 April 2024',
    time:'09:30'
  },
  {
    id: '05',
    name:'Rhona Davidson',
    assigned: 'Sonya Frost',
    date: '08 March 2024',
    time:'09:15'
  },
  {
    id: '04',
    name:'Bradley Greer',
    assigned: 'Brenden Wagner',
    date: '11 July 2024',
    time:'10:00'
  }
]

const Student3ListArray = [
  {
    id: '01',
    image:'images/avatar/5.png',
    name:'Ricky Antony',
    assigned: 'Herman Beck',
    branch:'Mechanical',
    status: 'DONE',
    date: '	30/03/2024'
  },
  {
    id: '02',
    image:'images/avatar/1.png',
    name:'Emma Watson',
    assigned: 'Emma Watson',
    branch:'Computer',
    status: 'Pending',
    date: '	30/03/2024'
  },
  {
    id: '03',
    image:'images/avatar/5.png',
    name:'Rowen Atkinson',
    assigned: 'Mary Adams',
    branch:'Mechanical',
    status: 'DONE',
    date: '	30/03/2024'
  },
  {
    id: '04',
    image:'images/avatar/1.png',
    name:'Antony Hopkins',
    assigned: 'Caleb Richards',
    branch:'Computer',
    status: 'Suspended',
    date: '	30/03/2024'
  },
  {
    id: '05',
    image:'images/avatar/1.png',
    name:'Jennifer Schramm',
    assigned: 'June Lane',
    branch:'Fees Collection',
    status: 'Pending',
    date: '	30/03/2024'
  },
  {
    id: '06',
    image:'images/avatar/5.png',
    name:'Raymond Mims',
    assigned: 'Herman Beck',
    branch:'Computer',
    status: 'Suspended',
    date: '	30/03/2024'
  },
  {
    id: '07',
    image:'images/avatar/1.png',
    name:'Michael Jenkins',
    assigned: 'Caleb Richards',
    branch:'Computer',
    status: 'Pending',
    date: '	30/03/2024'
  },
]

const SalaryListArray = [
  {
    id: '01',
    image:'images/profile/education/pic1.jpg',
    name:'Angelica Ramos',
    status: 'Paid',
    date: '	12 August 2024',
    amount: '$100',
    transaction_id:'#42317',
  },
  {
    id: '02',
    image:'images/profile/education/pic2.jpg',
    name:'Bradley Greer',
    status: 'Unpaid',
    date: '	12 August 2024',
    amount: '$200',
    transaction_id:'#54682',
  },
  {
    id: '03',
    image:'images/profile/education/pic3.jpg',
    name:'Cedric Kelly',
    status: 'Pending',
    date: '	10 August 2024',
    amount: '$400',
    transaction_id:'#57894',
  },
  {
    id: '04',
    image:'images/profile/education/pic4.jpg',
    name:'Caesar Vance',
    status: 'Unpaid',
    date: '	12 August 2024',
    amount: '$300',
    transaction_id:'#54682',
  },
  {
    id: '05',
    image:'images/profile/education/pic5.jpg',
    name:'Rhona Davidson',
    status: 'Pending',
    date: '	12 August 2024',
    amount: '$500',
    transaction_id:'#54682',
  }
]

module.exports = {
  StudentListArray,
  Student2ListArray,
  Student3ListArray,
  SalaryListArray
}