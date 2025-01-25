# aem-engineering-service-api
API that converts numbers into roman numerals

## Roman Numerals

This application adheres to the standard Roman Numeral notation including subtractive notation as defined by [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals) and will accept integer inputs between **1** and **3999**. From [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals):

> Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers are written with combinations of letters from the Latin alphabet, each with a fixed integer value. The modern style uses only these seven:


| I |	V |	X |	L |	C |	D |	M |
| -- | -- | -- | -- | -- | -- | -- |
| 1 |	5 |	10 |	50 |	100 |	500 |	1000 |

> Standard form
> The following table displays how Roman numerals are usually written:[4]

Individual decimal places
|  | Thousands |	Hundreds |	Tens |	Units |
| ----- | ----- | ----- | ----- | ----- |
| 1 |	M |	C |	X |	I |
| 2 |	MM |	CC |	XX |	II |
| 3 |	MMM |	CCC |	XXX |	III |
| 4 |	 | CD |	XL |	IV |
| 5	|	 | D |	L |	V |
| 6	|  | DC |	LX |	VI |
| 7	|	 | DCC |	LXX |	VII |
| 8	|	 | DCCC |	LXXX |	VIII |
| 9	|	 | CM |	XC |	IX |

## Built with
- [Typescript](https://www.typescriptlang.org/)
- [TSX](https://www.npmjs.com/package/tsx)
- [Jest](https://jestjs.io/)
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Supertest](https://www.npmjs.com/package/supertest)

This is not an exhaustive list. For the full list of dependencies refer to [package.json](package.json)

## Getting started

`git clone` this repository and `cd` into the root directory.

In the project directory:

`npm i`

Installs all project dependencies

`npm run dev`

Runs the app in development mode and starts the server listening at `8080`

The app will re compile when you make changes.\

`npm start`

Starts the app 

`npm run test`

Launches the test runner in the interactive watch mode using [Jest](https://jestjs.io/).

`npm run build`

Builds the app for production to the `dist` folder.\

## Project Structure
```bash
├── dist                                      # output directory for build command
├── src                                       # the entrypoint for the project files
│   ├── controller                            # the main controllers for the app
│   ├── middleware                            # middlewares for the server (eg error handlers and validators)
│   ├── utils                                 # directory of util files, constants, and util tests
│   ├── router                                # directory for the routers and root router
│   ├── test                                  # directory for the app test
│   ├── App.ts
├── .gitignore
├── .editorconfig
├── .prettierignore
├── .prettierrc
├── eslintrc.js
├── jest.config.js
├── tsconfig.json
├── package.json
├── package-lock.json
├── README.md
```

## API spec

#### Converting numbers to roman numerals

<details>
 <summary><code>GET</code> <code><b>/romannumeral?query={integer}</b></code> <code>(gets the input integer as a roman numeral)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | query     |  required | Integer from 1 to 3999  | The number to convert to a roman numeral |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"input":"24","output":"XXIV"}`                                    |
> | `400`         | `text/html;charset=utf-8`         | `Error invalid input: Must provide a valid integer between 1 and 3999`|
> | `500`         | `text/html;charset=utf-8`         | `Internal Server Error`                                             |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8080/romannumeral?query=24
> ```

</details>

------------------------------------------------------------------------------------------
