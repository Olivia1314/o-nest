import {
  ContextIdStrategy,
  ContextId,
  ContextIdFactory,
  HostComponentInfo,
} from '@nestjs/core';

const tenants = new Map<string, ContextId>();

export class AggregateByContextIdStrategy implements ContextIdStrategy {
  attach(contextId: ContextId, request: Request) {
    const tenantId = request.headers['x-tenant-id'] as string;
    let tenantSubTreeId: ContextId;

    if (tenants.has(tenantId)) {
      tenantSubTreeId = tenants.get(tenantId) as ContextId;
    } else {
      tenantSubTreeId = ContextIdFactory.create();
      tenants.set(tenantId, tenantSubTreeId);
    }

    return (info: HostComponentInfo) =>
      info.isTreeDurable ? tenantSubTreeId : contextId;
  }
}

// 好的，有了这个策略，您可以在代码中的某个地方注册它（因为它无论如何都是全局适用的），例如，您可以将它放在main.ts文件中：
// ContextIdFactory.apply(new AggregateByContextIdStrategy());

// 要将常规提供程序转变为持久提供程序，只需将durable标志设置为true
// import { Injectable, Scope } from '@nestjs/common';
// @Injectable({ scope: Scope.REQUEST, durable: true })
// export class CatsService {}
