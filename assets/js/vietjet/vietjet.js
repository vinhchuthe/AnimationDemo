// Drag
var draggable = Draggable.create($("#drag"), {
    bounds: $("#master-wrapper"),
    edgeResistance: 1,
    type: "y,x",
    cursor: 'grab',
})