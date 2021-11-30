wp.blocks.registerBlockType("test/test-name", {
    title: "Testblock",
    icon: "dashicons-admin-user",
    category: "common",
    attributes: {
      skyColor: { type: "string" },
      grassColor: { type: "string" }
    },
    edit: () => <div>Hi!</div>,
    save: () => <div>Hi, this block is saved!</div>
});
