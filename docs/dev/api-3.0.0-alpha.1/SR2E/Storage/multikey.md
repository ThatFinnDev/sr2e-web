# MultiKey

Namespace: SR2E.Storage

Struct acting as an array of keys check for input at the same time

```csharp
public struct MultiKey
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [MultiKey](/docs/dev/api-3.0.0-alpha.1/sr2e/storage/multikey)<br />
Attributes [NullableContextAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullablecontextattribute), [NullableAttribute](/docs/dev/api-3.0.0-alpha.1/system/runtime/compilerservices/nullableattribute)

## Fields

### **requiredKeys**

```csharp
public List<Key> requiredKeys;
```

## Constructors

### **MultiKey(List&lt;Key&gt;)**

A Multi-Key constructor using a List instead of an array

```csharp
MultiKey(List<Key> requiredKeys)
```

#### Parameters

`requiredKeys` [List&lt;Key&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br />
The collection of keys to check for

### **MultiKey(Key[])**

A Multi-Key constructor using a params array.

```csharp
MultiKey(Key[] requiredKeys)
```

#### Parameters

`requiredKeys` [Key[]](/docs/dev/api-3.0.0-alpha.1/sr2e/key)<br />
The collection of keys to check for
