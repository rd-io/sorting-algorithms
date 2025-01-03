local function deepClone(obj)
    if type(obj) ~= "table" then
        return obj
    end
    local res = {}
    for k, v in pairs(obj) do
        res[deepClone(k)] = deepClone(v)
    end
    return res
end

return deepClone
