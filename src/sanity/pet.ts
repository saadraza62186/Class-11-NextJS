export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'petName', // Use camelCase or snake_case without spaces
            type: 'string',
            title: 'Name', // The title is user-friendly and can include spaces
            description: 'Enter the name of the pet.' // Description for additional context
        },
    ]
};
