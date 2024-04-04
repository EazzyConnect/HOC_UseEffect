import Child from "./Child";

const Master = (Item) => {

    const properties = {
        name: "Adex",
        age: 40,
        status: true,
        level: "Beginner"
    }

    return () => {

        const { name, age, status, level } = properties

        return (
            <>
                {
                    status

                        ?

                        <p>Hello {name}, Level: {level}, age: {age} <Item {...properties} /> </p>

                        :
                        <p>No status</p>
                }
            </>
        )

    }
};




export default Master;
