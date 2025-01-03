# SR2EInputManager

Namespace: SR2E

```csharp
public static class SR2EInputManager
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2EInputManager](/docs/dev/api-3.0.0-alpha.1/sr2e/sr2einputmanager)<br />
Attributes [ExtensionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.extensionattribute)

## Methods

### **GetAsyncKeyState(Int32)**

```csharp
public static short GetAsyncKeyState(int vKey)
```

#### Parameters

`vKey` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

#### Returns

[Int16](https://docs.microsoft.com/en-us/dotnet/api/system.int16)<br />

### **OnKeyPressed(Key)**

```csharp
public static bool OnKeyPressed(Key key)
```

#### Parameters

`key` [Key](/docs/dev/api-3.0.0-alpha.1/sr2e/key)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **OnKeyUnpressed(Key)**

```csharp
public static bool OnKeyUnpressed(Key key)
```

#### Parameters

`key` [Key](/docs/dev/api-3.0.0-alpha.1/sr2e/key)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **OnKey(Key)**

```csharp
public static bool OnKey(Key key)
```

#### Parameters

`key` [Key](/docs/dev/api-3.0.0-alpha.1/sr2e/key)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **OnKeyPressed(MultiKey)**

Run this every Update to get whether the key was pressed this frame

```csharp
public static bool OnKeyPressed(MultiKey multiKey)
```

#### Parameters

`multiKey` [MultiKey](/docs/dev/api-3.0.0-alpha.1/sr2e/storage/multikey)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
If the key was pressed this frame

### **OnKeyUnpressed(MultiKey)**

```csharp
public static bool OnKeyUnpressed(MultiKey multiKey)
```

#### Parameters

`multiKey` [MultiKey](/docs/dev/api-3.0.0-alpha.1/sr2e/storage/multikey)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **OnKey(MultiKey)**

```csharp
public static bool OnKey(MultiKey multiKey)
```

#### Parameters

`multiKey` [MultiKey](/docs/dev/api-3.0.0-alpha.1/sr2e/storage/multikey)<br />

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
