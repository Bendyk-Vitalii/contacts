import React from "react"
import { render, screen } from "@testing-library/react"
import { Contacts } from "../pages/Contacts"
import { setupWorker, rest } from "msw"
import { setupServer } from "msw/node"

const users = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Carter",
      last: "Cooper",
    },
    location: {
      street: {
        number: 9321,
        name: "Grange Road",
      },
      city: "Blessington",
      state: "Longford",
      country: "Ireland",
      postcode: 86601,
      coordinates: {
        latitude: "23.6784",
        longitude: "-56.1739",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "carter.cooper@example.com",
    login: {
      uuid: "223e328d-ad51-405d-a8f5-6c1242bd39e1",
      username: "yellowgoose478",
      password: "kurt",
      salt: "Q1vgdv1Q",
      md5: "a54ef05fe89db92b1c2d12af44eee35a",
      sha1: "ed18572eddec9fd01b64740c40bbede0bfc24c55",
      sha256:
        "5c0eed5fccba5d599e40ffe0fa1be03a1a09615032f0cabb300b56c49d426806",
    },
    dob: {
      date: "1987-05-12T00:49:39.591Z",
      age: 34,
    },
    registered: {
      date: "2003-05-24T18:27:00.898Z",
      age: 18,
    },
    phone: "031-178-2580",
    cell: "081-256-0778",
    id: {
      name: "PPS",
      value: "3167533T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Mathieu",
      last: "Michel",
    },
    location: {
      street: {
        number: 9051,
        name: "Place de L'Europe",
      },
      city: "Limoges",
      state: "Hauts-de-Seine",
      country: "France",
      postcode: 99193,
      coordinates: {
        latitude: "-50.3727",
        longitude: "17.2991",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "mathieu.michel@example.com",
    login: {
      uuid: "a1bcc52a-b956-477a-b3e3-77f7e9f659f6",
      username: "silvergorilla430",
      password: "hammond",
      salt: "E6J0AvM8",
      md5: "ca999be780a6dde59b671c53a68eef90",
      sha1: "b0d937af4cd0e4ec77e7feef6ef390356e08dda1",
      sha256:
        "d98c17d7fa6f04bf21b1764540b352441b2f5e89739069cff60eba2837c6b43f",
    },
    dob: {
      date: "1985-07-13T23:44:55.386Z",
      age: 36,
    },
    registered: {
      date: "2008-01-22T01:10:30.961Z",
      age: 13,
    },
    phone: "03-51-22-80-08",
    cell: "06-17-67-02-55",
    id: {
      name: "INSEE",
      value: "1NNaN31736151 95",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    },
    nat: "FR",
  },
]

const handlers = [
  rest.get("https://randomuser.me/api/?results=20", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: users,
      })
    )
  }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

test("contacts get data success", async () => {
  render(<Contacts />)

  const loader = screen.getByTestId("contacts-loader")

  expect(loader).toBeInTheDocument()

  await waitForElementToBeRemoved(loader)

  expect(loader).not.toBeInTheDocument()

  expect(screen.getByTestId("contacts_table-container")).toBeInTheDocument()
})
