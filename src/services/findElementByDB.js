function findElementByID(id, typeList) {
  const indexTaskFind = typeList.findIndex(
    (elemente) => elemente.id === Number(id)
  );
  return indexTaskFind;
}

module.exports = findElementByID;
